import '../css/main.scss';
import { fleet } from './data';
import { DataService } from "./services/data-service";

let dataService=new DataService();
dataService.loadData(fleet);
dataService.printData(dataService.pasta);
dataService.printData(dataService.secondi);
console.log(dataService.pasta);