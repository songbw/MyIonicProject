import {Injectable} from "@angular/core";
import {HttpService} from "../../providers/HttpService";
import {APP_SERVE_URL} from "../../providers/Constants";

@Injectable()
export class SearchService {
  constructor(private httpService: HttpService) {

  }

  searchStandard(name:string) {
    return this.httpService.get(APP_SERVE_URL+'/api/standard/search',{"key":name});
  }

  findStandard(id:number) {
    return this.httpService.get(APP_SERVE_URL+'/api/standard/get',{"id":id});
  }
}
