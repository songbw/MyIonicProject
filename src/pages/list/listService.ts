import {Injectable} from "@angular/core";
import {HttpService} from "../../providers/HttpService";
import {APP_SERVE_URL} from "../../providers/Constants";

@Injectable()
export class ListService {
  constructor(private httpService: HttpService) {

  }

  standardBycode() {
    return this.httpService.get(APP_SERVE_URL+'/api/standard/search',{"key":""});
  }

  standardBytype(type:string,currentPage:number,pageSize:number) {
    return this.httpService.get(APP_SERVE_URL+'/api/standard',{"type":type,"currentPage":currentPage,"pageSize":pageSize});
  }

  searchStandardByType(type:string,currentPage:number,pageSize:number,key:string,parentId:number) {
    return this.httpService.get(APP_SERVE_URL+'/api/standard',{"type":type,"currentPage":currentPage,"pageSize":pageSize,"key":key,"parentId":parentId});
  }
}
