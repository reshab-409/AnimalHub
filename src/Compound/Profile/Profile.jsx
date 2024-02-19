import React, { useEffect, useState } from 'react';
import './profile.css'; // Import your CSS files
import './Profile-Responsive.css';
import { Alert, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate();
    // State to manage form data
    const [formData, setFormData] = useState({
        phone: '',
        address: '',
        dob: '' // Default profile picture
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
        localStorage.setItem('ProfileData', JSON.stringify(formData));
        // Perform any additional actions here (e.g., send data to the server)
        console.log('Form submitted with data:', formData);
    };



    useEffect(() => {
        // Load form data from localStorage on component mount
        const storedFormData = localStorage.getItem('ProfileData');
        if (storedFormData) {
            setFormData(JSON.parse(storedFormData));
        }

        // Load profile picture from localStorage on component mount
        const storedProfilePicture = localStorage.getItem('profilePicture');
        if (storedProfilePicture) {
            setProfilePicture(storedProfilePicture);
        }
    }, []);


    // Profile avatar
    const defaultProfilePicture = 'https://cdn2.iconfinder.com/data/icons/lucid-generic/24/User_person_avtar_profile_picture_dp-512.png';
    const [profilePicture, setProfilePicture] = useState(defaultProfilePicture);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // Load profile picture from localStorage on component mount
        const storedProfilePicture = localStorage.getItem('profilePicture');
        if (storedProfilePicture) {
            setProfilePicture(storedProfilePicture);
        }
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Read the selected file as a data URL
            const reader = new FileReader();
            reader.onloadend = () => {
                const newProfilePicture = reader.result;
                setProfilePicture(newProfilePicture);

                // Save the new profile picture to localStorage
                localStorage.setItem('profilePicture', newProfilePicture);
            };
            reader.readAsDataURL(file);
        }
    };

    const timer = React.useRef();
    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);
    const submit = () => {
        setSuccess(true);
        timer.current = window.setTimeout(() => {
            setSuccess(false);
        }, 1000);
    };


    const userDetails = JSON.parse(window.localStorage.getItem("currentUser"))

    return (
        <div className="user-profile-conainor">
            <div className="user-profile-area-sec">
                <div className="user-profile-picture-sec">
                    <div className="user-profile-propic">
                        {success && <Alert severity="success">Profile picture update successful!</Alert>}
                        <div className="user-profile-picture-store-sec">
                            <img src={profilePicture} alt="img" id="Profile-Photos" />
                        </div>
                        <div className="user-profile-save-and-add-pic-sec">
                            <div className="user-profile-input-div">
                                <input
                                    id="input-profile-uplode-picture"
                                    name="file"
                                    type="file"
                                    accept="image/jpeg, image/jpg, image/png"
                                    onChange={handleFileChange}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="user-profile-icon">
                                    <polyline points="16 16 12 12 8 16"></polyline>
                                    <line y2="21" x2="12" y1="12" x1="12"></line>
                                    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                    <polyline points="16 16 12 12 8 16"></polyline>
                                </svg>
                            </div>
                            <button onClick={submit} className="bookmarkBtn">
                                <span className="IconContainer">
                                    <svg viewBox="0 0 384 512" height="1em" className="user-profile-save-icon">
                                        <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
                                    </svg>
                                </span>
                                <p className="user-profile-save-text">Save</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="user-profile-form-area-store-sec">
                    <form onSubmit={handleSubmit} className="user-profile-form-sec">
                        <div className="profile-details-field">
                            <label className="user-profile-form-label">Username</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                name="username"
                                className="user-profile-form-input"
                                value={userDetails.name}
                                disabled
                            />
                        </div>
                        <div className="profile-details-field">
                            <label className="user-profile-form-label">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                name="email"
                                className="user-profile-form-input"
                                value={userDetails.email}
                                disabled
                            />
                        </div>
                        <div className="profile-details-field">
                            <label className="user-profile-form-label">Phone No.</label>
                            <input
                                type="number"
                                placeholder="Enter Your Phone No."
                                name="phone"
                                required
                                className="user-profile-form-input"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="profile-details-field">
                            <label className="user-profile-form-label">Address</label>
                            <input
                                required
                                type="text"
                                placeholder="Enter Your Address"
                                name="address"
                                className="user-profile-form-input"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="profile-details-field">
                            <label className="user-profile-form-label">Date of Birth</label>
                            <input
                                required
                                type="date"
                                placeholder="Enter Your Date of Birth"
                                name="dob"
                                className="user-profile-form-input"
                                value={formData.dob}
                                onChange={handleInputChange}
                            />
                        </div>
                        <Button variant='contained' type="submit">Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
