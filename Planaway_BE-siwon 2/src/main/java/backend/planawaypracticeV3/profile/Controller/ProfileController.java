package backend.planawaypracticeV3.profile.Controller;

import backend.planawaypracticeV3.profile.Model.UserProfile;
import backend.planawaypracticeV3.profile.Service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users/profile")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @PostMapping("/photo")
    public ResponseEntity<Void> uploadProfilePhoto(@RequestParam Long userId, @RequestParam String photoUrl) {
        UserProfile userProfile = new UserProfile();
        userProfile.setId(userId);
        profileService.uploadProfilePhoto(userProfile, photoUrl);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/photo")
    public ResponseEntity<String> getProfilePhotoUrl(@RequestParam Long userId) {
        String photoUrl = profileService.getProfilePhotoUrl(userId);
        return photoUrl != null ? ResponseEntity.ok(photoUrl) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/photo")
    public ResponseEntity<Void> deleteProfilePhoto(@RequestParam Long userId) {
        profileService.deleteProfilePhoto(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/photo")
    public ResponseEntity<Void> updateProfilePhoto(@RequestParam Long userId, @RequestParam String photoUrl) {
        UserProfile userProfile = new UserProfile();
        userProfile.setId(userId);
        profileService.updateProfilePhoto(userProfile, photoUrl);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}