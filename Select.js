function selectSocialMedia() {
    
    var socialMediaSelect = document.getElementById("social-media");
    var selectedSocialMedia = socialMediaSelect.value;


    switch (selectedSocialMedia) {
        case 'Facebook':
            window.open('https://www.facebook.com', '_blank');
            break;
        case 'Twitter':
            window.open('https://twitter.com', '_blank');
            break;
        case 'Instagram':
            window.open('https://www.instagram.com', '_blank');
            break;
        case 'Linkedin':
            window.open('https://www.linkedin.com', '_blank');
            break;
        case 'Whatsapp':
            window.open('https://web.whatsapp.com', '_blank');
            break;
           case'Youtube':
           window.open('https://www.youtube.com', '_blank' );
            break;
            case'Snapchat':
            window.open('https://www.snapchat.com', '_blank');
            default:
                break;
    }

     var selectedSocialMediaDiv = document.getElementById("selected-social-media");
    selectedSocialMediaDiv.textContent = "Selected Social Media: " + selectedSocialMedia;
}