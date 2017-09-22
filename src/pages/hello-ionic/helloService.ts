import {Injectable} from "@angular/core";
import {HttpService} from "../../providers/HttpService";
import {APP_SERVE_URL} from "../../providers/Constants";

@Injectable()
export class HelloService {
  constructor(private httpService: HttpService) {

  }

  getFenlei() {
    return this.httpService.get(APP_SERVE_URL+'/api/fenlei',null);
  }
}
