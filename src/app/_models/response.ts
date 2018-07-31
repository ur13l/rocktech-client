export class Response<T> {
    data : T;
    errors : string[];
    success : boolean;
}