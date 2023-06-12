export interface FileUploadProps{
    icon?:any;
    desc?:string;
    onClickUpload?:Function | any ;
    maxSize?:number | string | any;
    isMultiple:boolean;
    rootStyle?:object;
    cardStyle?:object;
    UploadIconStyle?:object;
    descStyle?:object;
    uploadedCardStyle?:object;
    uploadedFileBoxStyle?:object;
    docIconStyle?:object;
    fileTitleStyle?:object;
    fileSizeStyle?:object;
    fileRemoveIconStyle?:object;
    variant?:number;
}