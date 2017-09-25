import {Injectable} from "@angular/core";
import {HttpService} from "../../providers/HttpService";
import {APP_SERVE_URL} from "../../providers/Constants";

@Injectable()
export class TreeService {
  constructor(private httpService: HttpService) {

  }

  getTreeByParent(id:number) {
    return this.httpService.get(APP_SERVE_URL+'/api/tree/parent',{"id":id});
  }

}
