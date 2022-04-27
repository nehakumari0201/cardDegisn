import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  details: IDetails[] = [
    {
      interview: [
        {
          applied_position: 'Fullstack',
          e_ctc: 25555,
          created_at: '21:40:21.735631+05:30',
          updated_at: '21:40:21.735631+05:30',
          status: 'PROCESS',
          comission_type: 1,
          comission: 222,
        },
      ], candidate:[{
        email:"testuser@yopmail.com",
        mobile:8329042250,
        prev_emp:"Nullplex",
        job_status:"Angular Developer",
        current_ctc:24000,
        notice_period:"90 Days",
        year_of_exp:4,
        technologies:"Angular,C++,Java",
        avtar:"public\\candidates\\avtar\\1650732358899-g0225D-pAIcMnvjM5JDeh.jpg",
        resume: "public\\candidates\\resume\\1650732358913-9qZRzOzdT12X74-U6eqsA.pdf"
      }],
      client:[{
        name:"Test 55",
        link: "https://material.angular.io/components/input/api",
        logo:"public\\clients\\1650740579734-4ojzrSLgZEDacUUasrtRc.jpeg"
      }],
      created_by:[{
        fullname: "Bhushan HR"
      }],
      rounds:[{
        id:"2ac5a629-c797-4f97-9c2f-88b5655063e7",
        name:"Techincal",
        status:1
      },{
        id:"4fb941a1-cfe7-4292-ab56-d0acb0d7fe40",
        name:"Techincal",
        status:1
      }]
    },
  ];

  constructor() { }
  getAll(){
    return this.details;
  }

}
export interface IInterview {
  applied_position: string;
  e_ctc: number;
  created_at: string;
  updated_at: string;
  status: string;
  comission_type: number;
  comission: number;
}
export interface ICandidate {
  email: string;
  mobile: number;
  prev_emp: string;
  job_status: string;
  current_ctc: number;
  notice_period: string;
  year_of_exp: number;
  technologies: string;
  avtar: string;
  resume: string;
}
export interface IClient {
  name: string;
  link: string;
  logo: string;
}
export interface ICreated_by {
  fullname: string;
}

export interface IRounds {
  id: string;
  name: string;
  status: number;
}
export interface IDetails {
  interview: IInterview[];
  candidate: ICandidate[];
  client: IClient[];
  created_by: ICreated_by[];
  rounds: IRounds[];
}
