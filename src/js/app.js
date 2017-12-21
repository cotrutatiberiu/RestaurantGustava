import '../css/main.scss';
import { fleet } from './data';
import { DataService } from "./services/data-service";
import { Menu } from "./services/menu-service";

let dataService=new DataService();
dataService.loadData(fleet);
let createMenu=new Menu(dataService);