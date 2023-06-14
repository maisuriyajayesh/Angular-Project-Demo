import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { SwitchmethodComponent } from './switchmethod/switchmethod.component';
import { LoopmethodComponent } from './loopmethod/loopmethod.component';
import { NestedloopMethodComponent } from './nestedloop-method/nestedloop-method.component';
import { ToggleElementComponent } from './toggle-element/toggle-element.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaketodolistComponent } from './maketodolist/maketodolist.component';
import { ChildcomponetmethodComponent } from './childcomponetmethod/childcomponetmethod.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { PipeMethodComponent } from './pipe-method/pipe-method.component';
import { PipeFilterPipe } from './pipe-filter.pipe';
import { EmployeeListfromComponent } from './employee-listfrom/employee-listfrom.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddModalListTableComponent } from './add-modal-list-table/add-modal-list-table.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { FormDeatilsListComponent } from './reactiveforms/form-deatils-list/form-deatils-list.component';
import { DataBindingEventsHandlingComponent } from './DataBindingEventsHandling/DataBindingEventsHandling.component';
import { DirectiveComponent } from './directive/directive.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { ServiceDemoComponent } from './services/service-demo/service-demo.component';
import { PostService } from './services/post.service';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormSetupComponent } from './reactive-form-setup/reactive-form-setup.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormdemoComponent,
    SwitchmethodComponent,
    LoopmethodComponent,
    NestedloopMethodComponent,
    ToggleElementComponent,
    MaketodolistComponent,
    ChildcomponetmethodComponent,
    TwowaybindingComponent,
    PipeMethodComponent,
    PipeFilterPipe,
    EmployeeListfromComponent,
    AddModalListTableComponent,
    ReactiveformsComponent,
    FormDeatilsListComponent,
    DataBindingEventsHandlingComponent,
    DirectiveComponent,
    DirectiveDemoComponent,
    ServiceDemoComponent,
    TemplateDrivenFormComponent,
    ReactiveFormSetupComponent,
    ToDoListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
