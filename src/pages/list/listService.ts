import {Injectable} from "@angular/core";
import {HttpService} from "../../providers/HttpService";
import {APP_SERVE_URL} from "../../providers/Constants";

@Injectable()
export class ListService {
  constructor(private httpService: HttpService) {

  }

  standardBycode() {
    return this.httpService.get(APP_SERVE_URL+'/api/standard/search',{"key":"螺丝"});
  }
}
