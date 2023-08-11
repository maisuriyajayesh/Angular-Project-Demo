import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProfileDataEntryService } from '../../services/profile-data-entry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-entry-form',
  templateUrl: './profile-entry-form.component.html',
  styleUrls: ['./profile-entry-form.component.scss']
})
export class ProfileEntryFormComponent implements OnInit {
  profileForm: FormGroup;
  profileFormData: any[] = [];
  editIndex: number = -1;
  showAllDataFlag: boolean = false;
  studentData:any;

  constructor(private _profileFrom: FormBuilder, private _profileDatalist: ProfileDataEntryService, private router: Router) {
    this.profileForm = this._profileFrom.group({
      firstName: '',
      lastName: '',
      gender: '',
      Email: '',
      phoneNumber: '',
      birthDate: '',
      profilePic: '',
      jobRole: '',
      department: '',
      city: '',
      state: '',
      contry: '',
    });
  }
  onSubmit() {
    if (this.profileForm.valid) {
      // If editIndex is -1, it means this is a new entry.
      if (this.editIndex === -1) {
        this.profileFormData.push(this.profileForm.value);
      } else {
        // Update the existing row with the edited data.
        this.profileFormData[this.editIndex] = this.profileForm.value;
        // Reset editIndex to -1 after updating the row.
        this.editIndex = -1;
      }

      // Save the data to local storage
      localStorage.setItem('profileData', JSON.stringify(this.profileFormData));

      // Call the API to add data to the backend only if there is data in the profileFormData
      if (this.profileFormData.length > 0) {
        this._profileDatalist.profileEntryData(this.profileForm.value).subscribe(
          (response) => {
            // Handle the response if needed
            //console.log('Data added successfully to the backend:', response);
          },
          (error) => {
            // Handle the error if there is any
            // console.error('Error adding data to the backend:', error);
          }
        );
      }
      // Reset the form after submission
      this.profileForm.reset();
    }
  }

  editData(index: number) {
    if (index >= 0 && index < this.profileFormData.length) {
      this.editIndex = index; // Store the index of the data being edited

      // Get the data to edit based on the provided index
      const dataToEdit = this.profileFormData[index];

      // Update the form with the selected data, except for profilePic
      const { profilePic, ...formDataWithoutProfilePic } = dataToEdit;
      this.profileForm.patchValue(formDataWithoutProfilePic);
    } else {
      console.error('Invalid index provided for editing data.');
    }
  }
  removeData(index: number) {
    if (index >= 0 && index < this.profileFormData.length) {
      // Remove the data from the profileFormData array
      this.profileFormData.splice(index, 1);

      // Save the updated data to local storage
      localStorage.setItem('profileData', JSON.stringify(this.profileFormData));

      // Call the API to remove data from the backend if needed
      // You can add this functionality based on your API implementation

      // Reset the form if the removed data was being edited
      if (this.editIndex === index) {
        this.editIndex = -1;
        this.profileForm.reset();
      }
    } else {
      console.error('Invalid index provided for removing data.');
    }
  }
 
  clearForm() {
    this.profileForm.reset();
    this.editIndex = -1;
  }
  viewall(){
    //this.showAllDataFlag = !this.showAllDataFlag;
     this.studentData = JSON.parse(JSON.stringify(this.profileFormData))
     this.router.navigate(['all-proflie-data-list']);
  }
  ngOnInit(): void {
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      this.profileFormData = JSON.parse(savedData);
    }
     
  }

}
