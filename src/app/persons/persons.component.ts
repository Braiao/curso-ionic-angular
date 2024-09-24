import { Component, OnDestroy, OnInit} from "@angular/core";
import { PersonsService } from "./persons.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy{
    personList: string[] = [];
    isFetching = false;
    private personListSubs: Subscription | null = null;
   /*  private personService: PersonsService; */

    constructor(private prsService: PersonsService) {
        /* this.personService = prsService; */
    }

    ngOnInit(): void {
        
        this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
            this.personList = persons;
            this.isFetching = false;
        });
        this.isFetching = true;
        this.prsService.fetchPersons();
    }

    ngOnDestroy(): void {
        this.personListSubs?.unsubscribe();
    }

    onRemovePerson(personName: string) {
        this.prsService.removePerson(personName);
    }
}