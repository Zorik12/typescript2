import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdministrationRoutingModule } from './administration-routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AddUserFormComponent } from './pages/users-page/components/add-user-form/add-user-form.component';
@NgModule({
  declarations: [
    AdminPageComponent,
    UsersPageComponent,
    AddUserFormComponent
  ],  imports: [
    SharedModule,
    ReactiveFormsModule,
    AdministrationRoutingModule,
    CommonModule,
    FormsModule,
    
  ]
})

export class AdministrationModule { }