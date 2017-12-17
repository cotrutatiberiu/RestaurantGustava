import '../css/main.scss';
import { fleet } from './data';
import { DataService } from "./services/data-service";

let dataService=new DataService();
dataService.loadData(fleet);