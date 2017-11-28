import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
// import { User } from './../models/user';
import {BaseService} from './base.service';
// import { SubDomain } from './../interfaces/subdomain.interface';
// import { SubDomainService } from './subdomain.service';

@Injectable()
export class PlanService extends BaseService {
  constructor(public _http: Http) {
    super();
  }

  getPlanTypes() {
    const url = `${this._url}/plan/types`;
    return this._http.get(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPlanFeatures(plan: String) {
    let getPlanUrl = this._url + '/planfeature/' + plan;
    return this._http.get(getPlanUrl, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateCompanyFeatures(planId, data: any) {
    return this._http.put(this._url + '/updateAllCompanyFeatures/' + planId, data, this.put_options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  updatePlanFeatures(plan: String, data: any) {
    let planUrl = this._url + '/planfeature/active/' + plan;

    return this._http.put(planUrl, data, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPlans() {
    let planUrl = this._url + '/userplans';
    return this._http.get(planUrl, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPlanLimits(company_id: string) {
    let planUrl = this._url + '/plan/planlimits/' + company_id;
    return this._http.get(planUrl, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createPlan(data: any) {
    const url = `${this._url}/plans`;
    return this._http.post(url, data, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deletePlan(id) {
    const url = `${this._url}/plan/${id}`;
    return this._http.delete(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  fetchPlanListFromAPIs(apiURL) {
    const url = `${apiURL}/plan-list`;
    return this._http.get(url, this.get_options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  fetchPlanDataFromAPI(apiURL, planIds) {
    const url = `${apiURL}/plans/export`;
    return this._http.post(url, planIds, this.post_options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  saveFetchedPlanData(data) {
    return this._http.post(`${this._url}/plans/import`, data, this.post_options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAllCompanyFeaure(plan) {
    return this._http.get(`${this._url}/company/getAllCompanyFeatures/${plan}`, this.get_options())
      .map(this.extractData)
      .catch(this.handleError);
  }
}
