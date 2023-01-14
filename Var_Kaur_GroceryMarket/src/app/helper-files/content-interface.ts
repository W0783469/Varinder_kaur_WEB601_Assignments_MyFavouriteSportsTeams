import { Optional } from "@angular/core";

export interface Content {
    id: number;
    title : string;
    description : string;
    creator : string;
    imagelink? : string;
    type : string;
    hashtags: string[];


}

