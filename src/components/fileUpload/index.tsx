import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Icon,
  IconButton,
} from '@mui/material';
import { style } from './style';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import StopIcon from '@mui/icons-material/Stop';
import { FileUploadProps } from './props';
import DeleteIcon from '../../assets/deleteIcon';

interface myObject {
  id: number;
  file: File;
  loading: number;
  uploadProgress: number;
  isPaused: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({
  icon,
  desc,
  onClickUpload,
  maxSize,
  isMultiple,
  rootStyle,
  cardStyle,
  UploadIconStyle,
  descStyle,
  uploadedCardStyle,
  uploadedFileBoxStyle,
  docIconStyle,
  fileTitleStyle,
  fileSizeStyle,
  fileRemoveIconStyle,
  variant,
  TotalFileSelected,
  removeIcon,
  allowedTypes,
  errorStyle,
  uploadErrorStyle,
  timeout,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<myObject[]>([]);
  const [errorFiles, setErrorFiles] = useState<File[]>([]);
  const [activeIntervals, setActiveIntervals] = useState<NodeJS.Timeout[]>([]);
  const [isDragError, setIsDragError] = useState(false);

  function convertMaxSizeToBytes(fileSize: string): number {
    const units: { [key: string]: number } = {
      B: 1,
      KB: 1024,
      MB: 1024 * 1024,
      GB: 1024 * 1024 * 1024,
      TB: 1024 * 1024 * 1024 * 1024,
    };

    const sizeRegex: RegExp = /^(\d+(\.\d+)?)\s*(B|KB|MB|GB|TB)$/i;
    const matches: RegExpMatchArray | null = fileSize.match(sizeRegex);

    if (matches && matches.length === 4) {
      const size: number = parseFloat(matches[1]);
      const unit: string = matches[3].toUpperCase();

      if (units.hasOwnProperty(unit)) {
        return size * units[unit];
      }
    }

    throw new Error('Invalid file size format');
  }

  const getSelectedFiles = (item: any) => {
    TotalFileSelected.push(item);
    onClickUpload(TotalFileSelected);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const maxSizeBytes = convertMaxSizeToBytes(maxSize);
    if (files && files.length > 0) {
      const updatedSelectedFiles = [...selectedFiles];

      for (const file of files) {
        if (file.size <= maxSizeBytes && isFileTypeAllowed(file?.name)) {
          const newItem: myObject = {
            id: updatedSelectedFiles.length + 1,
            file: file,
            loading: 0,
            uploadProgress: 0,
            isPaused: false,
          };
          updatedSelectedFiles.push(newItem);
          getSelectedFiles(newItem);
        } else {
          const invalidFiles = [file];
          setErrorFiles((prevFiles: File[]) => [...prevFiles, ...invalidFiles]);
        }
      }
      setSelectedFiles(updatedSelectedFiles);
      uploadFile(files, 0);
    }
  };

  const isFileTypeAllowed = (fileName: string) => {
    const extension = fileName
      .substring(fileName.lastIndexOf('.') + 1)
      .toLowerCase();
    return allowedTypes.includes(extension);
  };

  const uploadFile = (files: any, pause: number) => {
    if (pause !== 1) {
      Array.from(files).forEach((file) => {
        const interval = setInterval(() => {
          setSelectedFiles((prevFiles) => {
            return prevFiles.map((obj) => {
              if (obj.file === file) {
                if (!obj.isPaused) {
                  obj.uploadProgress += 10;
                  if (obj.uploadProgress >= 100) {
                    obj.loading = 1;
                    obj.uploadProgress = 100;
                    obj.isPaused = false;
                    clearInterval(interval);
                  }
                }
              }
              return obj;
            });
          });
        }, 500);
        setActiveIntervals((prevIntervals) => [...prevIntervals, interval]);
      });

       setTimeout(() => {
        activeIntervals.forEach((interval) => clearInterval(interval));
        setActiveIntervals([]);
        console.log('Timeout complete'); 
      }, timeout);
    } else {
      activeIntervals.forEach((interval) => clearInterval(interval));
      setActiveIntervals([]);
    }
  };

  useEffect(() => {}, [selectedFiles]);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;

    if (!isMultiple && files.length > 1) {
      setIsDragError(true);
      return;
    }
    setIsDragError(false);

    if (files && files.length > 0) {
      for (const file of files) {
        if (file.size <= convertMaxSizeToBytes(maxSize)) {
          const newItem = {
            id: selectedFiles.length + 1,
            file: file,
            loading: 0,
            uploadProgress: 0,
            isPaused: false,
          };
          setSelectedFiles((prevFiles: any) => [...prevFiles, newItem]);
          getSelectedFiles(newItem);
        } else {
          const invalidFiles = [file];
          setErrorFiles((prevFiles: any) => [...prevFiles, ...invalidFiles]);
        }
      }
    }
    uploadFile(files, 0);
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName
      .substring(fileName.lastIndexOf('.') + 1)
      .toLowerCase();
    switch (extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
        return <InsertPhotoRoundedIcon width="42px" height="42px" />;
      case 'pdf':
        return <PictureAsPdfTwoToneIcon width="42px" height="42px" />;
      case 'svg':
        return <PictureAsPdfTwoToneIcon width="42px" height="42px" />;
      default:
        return <InsertDriveFileOutlinedIcon width="42px" height="42px" />;
    }
  };

  const formatFileSize = (size: number): string => {
    if (size === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleDelete = (file: File) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((prevFile) => prevFile.file !== file)
    );
    const indexToRemove = TotalFileSelected.findIndex(
      (item: any) => item.file === file
    );
    if (indexToRemove !== -1) {
      TotalFileSelected.splice(indexToRemove, 1);
    }
    onClickUpload(TotalFileSelected);
  };

  const handlePauseResume = (file: any) => {
    setSelectedFiles((prevFiles) => {
      return prevFiles.map((obj) => {
        if (obj.file === file.file) {
          obj.isPaused = !obj.isPaused;
        }
        return obj;
      });
    });

    onClickUpload(selectedFiles);

    if (!file.isPaused) {
      uploadFile([file.file], 0);
    }
  };

  return (
    <Box
      sx={{ ...style.rootStyle, ...rootStyle }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {variant == 1 && (
        <>
          <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
            <Box sx={{ ...style.cardSx, ...cardStyle }}>
              <Box sx={{ ...style.iconSx, ...UploadIconStyle }}>{icon}</Box>
              <Box>
                <Typography sx={{ ...style.descSx, ...descStyle }}>
                  {desc}
                </Typography>
              </Box>
            </Box>
          </label>
          <input
            id="file-upload"
            type="file"
            multiple={isMultiple}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </>
      )}

      {variant == 2 && (
        <>
          <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
            <Box sx={{ ...style.cardVtwoSx, ...cardStyle }}>
              <Box>
                <Typography sx={{ ...style.descSx, ...descStyle }}>
                  {desc}
                </Typography>
              </Box>
              <Box sx={{ ...style.iconSx, ...UploadIconStyle }}>{icon}</Box>
            </Box>
          </label>
          <input
            id="file-upload"
            type="file"
            multiple={isMultiple}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </>
      )}
      {isDragError && (
        <Box sx={{ ...style.uploadErrorSx, ...uploadErrorStyle }}>
          Error: Only one file can be upload.
        </Box>
      )}
      {selectedFiles.map((file, index) => (
        <Box key={index} sx={{ ...style.uploadedCardSx, ...uploadedCardStyle }}>
          <Box sx={{ ...style.uploadedFileBoxSx, ...uploadedFileBoxStyle }}>
            <Icon sx={{ ...style.docIconStyle, ...docIconStyle }}>
              {getFileIcon(file?.file?.name)}
            </Icon>
          </Box>
          <Box>
            <Typography sx={{ ...style.fileTitleSx, ...fileTitleStyle }}>
              {file?.file?.name}
            </Typography>
            <Typography sx={{ ...style.sizeSx, ...fileSizeStyle }}>
              {formatFileSize(file?.file?.size)}
            </Typography>
          </Box>
          <Box sx={{ ...style.removeIconSx, ...fileRemoveIconStyle }}>
            {file.loading === 0 && (
              <CircularProgress
                variant="determinate"
                value={file?.uploadProgress}
              />
            )}
            {file.loading === 0 && (
              <IconButton
                sx={style.pauseButton}
                onClick={() => handlePauseResume(file)}
              >
                <StopIcon />
              </IconButton>
            )}
            {file.loading === 1 && (
              <IconButton
                sx={{ ...style.deleteIconStyle }}
                onClick={() => handleDelete(file.file)}
              >
                {removeIcon}
              </IconButton>
            )}
          </Box>
        </Box>
      ))}
      {errorFiles.map((file, index) => (
        <Box key={index} sx={{ ...style.uploadedCardSx, ...uploadedCardStyle }}>
          <Box sx={{ ...style.uploadedFileBoxSx, ...uploadedFileBoxStyle }}>
            <Icon sx={{ ...style.docIconStyle, ...docIconStyle }}>
              {getFileIcon(file?.name)}
            </Icon>
          </Box>
          <Box>
            <Typography sx={{ ...style.fileTitleSx, ...fileTitleStyle }}>
              {file?.name}
            </Typography>
            <Typography sx={{ ...style.sizeSx, ...fileSizeStyle }}>
              {formatFileSize(file?.size)}
            </Typography>
          </Box>
          <Box sx={{ ...style.removeIconSx, ...fileRemoveIconStyle }}>
            {file.size > convertMaxSizeToBytes(maxSize) && (
              <Typography sx={{ ...style.errorSx, ...errorStyle }}>
                File size exceeds the maximum limit ({maxSize})
              </Typography>
            )}
            {!isFileTypeAllowed(file.name) && (
              <Typography sx={{ ...style.errorSx, ...errorStyle }}>
                Invalid file type. Allowed types: {allowedTypes.join(', ')}
              </Typography>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

FileUpload.defaultProps = {
  icon: <InsertPhotoRoundedIcon />,
  desc: 'Upload files',
  onClickUpload: () => {},
  maxSize: '1MB',
  isMultiple: false,
  rootStyle: {},
  cardStyle: {},
  UploadIconStyle: {},
  descStyle: {},
  uploadedCardStyle: {},
  uploadedFileBoxStyle: {},
  docIconStyle: {},
  fileTitleStyle: {},
  fileSizeStyle: {},
  fileRemoveIconStyle: {},
  variant: 1,
  TotalFileSelected: [],
  removeIcon: <DeleteIcon />,
  errorStyle: {},
  allowedTypes: [],
  uploadErrorStyle: {},
  timeout:5000
};

export default FileUpload;
