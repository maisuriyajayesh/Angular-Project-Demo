import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileDataEntryService } from '../../services/profile-data-entry.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  studentData: any;
  imagePreview: string | undefined;
  selectedImageFile: File | null = null;
  constructor(private _profileFrom: FormBuilder, private _profileDatalist: ProfileDataEntryService, private router: Router, private http: HttpClient) {
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
  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const filename = file.name;
      const profilePicControl = this.profileForm.get('profilePic');

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string; // Store the base64 data

        if (profilePicControl) {
          profilePicControl.setValue(filename);
        }
      };

      // Read the selected image data as a base64-encoded string
      reader.readAsDataURL(file);
    }
  }

  getProfilePicUrl(): string {
    return this.imagePreview || ''; // Return the base64 data for the previewed image
  }

  onSubmit() {
    if (this.profileForm.valid) {
      if (this.selectedImageFile) {
        // Upload the selected image file
        this._profileDatalist.uploadProfilePic(this.selectedImageFile).subscribe(
          (uploadResponse) => {
           // console.log('File uploaded successfully', uploadResponse);
            
            // After successful image upload, continue with form data submission
            this.submitFormData();
          },
          (uploadError) => {
           // console.error('File upload error', uploadError);
            // Handle upload error if needed
          }
        );
      } else {
        // No image selected, directly submit form data
        this.submitFormData();
      }
    }
  }
  
  private submitFormData() {
    if (this.editIndex === -1) {
      this.profileFormData.push(this.profileForm.value);
    } else {
      this.profileFormData[this.editIndex] = this.profileForm.value;
      this.editIndex = -1;
    }
    localStorage.setItem('profileData', JSON.stringify(this.profileFormData));
    
    if (this.profileFormData.length > 0) {
      this._profileDatalist.profileEntryData(this.profileForm.value).subscribe(
        (response) => {
          // Handle successful form data submission if needed
        },
        (error) => {
          // Handle form data submission error if needed
        }
      );
    }
    
    this.profileForm.reset();
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
  viewall() {
    this.router.navigate(['/all-proflie-data-list'], {
      queryParams: { profileData: JSON.stringify(this.profileFormData) }
    });
  }

  ngOnInit(): void {
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      this.profileFormData = JSON.parse(savedData);
    }
  }

}
