export class Videos{

    constructor(
        private id: string,
        private title: string,
        private time: number,
        private data_upload: Date
    ){}
    public getId(): string{
        return this.id
    }
    public setId(newId: string): void{
        this.id = newId
    }
    public getTitle(): string{
        return this.title
    }
    public setTitle(newTitle: string): void{
        this.title = newTitle
    }
    public getTime(): number{
        return this.time
    }
    public setTime(newTime: number): void{
        this.time = newTime
    }
    public getDataUpload(): Date{
        return this.data_upload
    }
    public setDataUpload(newDataUpload: Date): void{
        this.data_upload = newDataUpload
    }
}