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
import StopIcon from '@mui/icons-material/Stop';
import { FileUploadProps } from './props';
import DeleteIcon from '../../assets/deleteIcon';

interface myObject {
  id: number;
  file: File;
  loading: number;
  uploadProgress: number;
  isPaused: any;
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
}) => {
  const [selectedFiles, setSelectedFiles] = useState<myObject[]>([]);
  const [errorFiles, setErrorFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIntervals, setActiveIntervals] = useState<NodeJS.Timeout[]>([]);
  let TotalFileSelected: myObject[]
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      for (const file of files) {
        if (file.size <= maxSize) {
          let newItem: myObject = {
            id: selectedFiles.length + 1,
            file: file,
            loading: 0,
            uploadProgress: 0,
            isPaused: false,
          };
          setSelectedFiles((prevFiles: any) => [...prevFiles, newItem]);
          TotalFileSelected = [...TotalFileSelected,newItem];
          console.log(TotalFileSelected);
          onClickUpload(TotalFileSelected);
        } else {
          const invalidFiles = [file];
          setErrorFiles((prevFiles: any) => [...prevFiles, ...invalidFiles]);
        }
      }
    }
    uploadFile(files, 0);
  };

  const uploadFile = (files: any, pause: number) => {
    if (pause !== 1) {
      setUploading(true);

      Array.from(files).forEach((file) => {
        const interval = setInterval(() => {
          setSelectedFiles((prevFiles) => {
            return prevFiles.map((obj) => {
              if (obj.file === file) {
                if (!obj.isPaused) {
                  obj.uploadProgress += 10;
                  if (obj.uploadProgress > 90) {
                    obj.loading = 1;
                    // console.log(selectedFiles,"lllllllll")

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
        setUploadProgress(0);
        setUploading(false);
        // console.log(TotalFileSelected,"ttttttttttttttttttt")
      }, 5000);
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
    if (files && files.length > 0) {
      for (const file of files) {
        if (file.size <= maxSize) {
          const newItem = {
            id: selectedFiles.length + 1,
            file: file,
            loading: 0,
            uploadProgress: 0,
            isPaused: false,
          };
          setSelectedFiles((prevFiles: any) => [...prevFiles, newItem]);
          onClickUpload(newItem);
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
        return null;
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
    setUploadProgress(0);
    setIsPaused(false);
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
        <Box sx={{ ...style.cardSx, ...cardStyle }}>
          <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
            <Box sx={{ ...style.iconSx, ...UploadIconStyle }}>{icon}</Box>
            <Box>
              <Typography sx={{ ...style.descSx, ...descStyle }}>
                {desc}
              </Typography>
            </Box>
          </label>
          <input
            id="file-upload"
            type="file"
            multiple={isMultiple}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </Box>
      )}

      {variant == 2 && (
        <Box sx={{ ...style.cardVtwoSx, ...cardStyle }}>
          <label
            htmlFor="file-upload"
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography sx={{ ...style.descvarTwoSx, ...descStyle }}>
              {desc}
            </Typography>

            <Box sx={{ ...style.iconvarTwoSx, ...UploadIconStyle }}>{icon}</Box>
          </label>
          <input
            id="file-upload"
            type="file"
            multiple={isMultiple}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </Box>
      )}

      {selectedFiles.map((file, index) => (
        <Box key={index} sx={{ ...style.uploadedCardSx, ...uploadedCardStyle }}>
          <Box sx={{ ...style.uploadedFileBoxSx, ...uploadedFileBoxStyle }}>
            <Icon sx={{ ...style.docIconStyle, ...docIconStyle }}>
              {getFileIcon(file.file.name)}
            </Icon>
          </Box>
          <Box>
            <Typography sx={{ ...style.fileTitleSx, ...fileTitleStyle }}>
              {file.file.name}
            </Typography>
            <Typography sx={{ ...style.sizeSx, ...fileSizeStyle }}>
              {formatFileSize(file.file.size)}
            </Typography>
          </Box>
          <Box sx={{ ...style.removeIconSx, ...fileRemoveIconStyle }}>
            {file.loading === 0 && (
              <CircularProgress
                variant="determinate"
                value={file.uploadProgress}
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
                <DeleteIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      ))}
      {errorFiles.map((file, index) => (
        <Box key={index} sx={{ ...style.uploadedCardSx, ...uploadedCardStyle }}>
          <Box sx={{ ...style.uploadedFileBoxSx, ...uploadedFileBoxStyle }}>
            <Icon sx={{ ...style.docIconStyle, ...docIconStyle }}>
              {getFileIcon(file.name)}
            </Icon>
          </Box>
          <Box>
            <Typography sx={{ ...style.fileTitleSx, ...fileTitleStyle }}>
              {file.name}
            </Typography>
            <Typography sx={{ ...style.sizeSx, ...fileSizeStyle }}>
              {formatFileSize(file.size)}
            </Typography>
          </Box>
          <Box sx={{ ...style.removeIconSx, ...fileRemoveIconStyle }}>
            <Typography color="error">
              please upload valid file size (below {maxSize} )
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FileUpload;
