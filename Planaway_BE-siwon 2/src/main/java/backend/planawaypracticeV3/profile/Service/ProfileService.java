package backend.planawaypracticeV3.profile.Service;

import com.planaway.planaway_be.profile.Model.UserProfile;
import backend.planawaypracticeV3.profile.Repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    @Autowired
    private UserProfileRepository userProfileRepository;

    // 프로필 사진 등록 로직
    public void uploadProfilePhoto(UserProfile userProfile, String photoUrl) {
        userProfile.setProfilePhotoUrl(photoUrl);
        userProfileRepository.save(userProfile);
    }

    // 프로필 사진 조회 로직
    public String getProfilePhotoUrl(Long userId) {
        UserProfile userProfile = userProfileRepository.findById(userId).orElse(null);
        return userProfile != null ? userProfile.getProfilePhotoUrl() : null;
    }

    // 프로필 사진 삭제 로직
    public void deleteProfilePhoto(Long userId) {
        UserProfile userProfile = userProfileRepository.findById(userId).orElse(null);
        if (userProfile != null) {
            userProfile.setProfilePhotoUrl(null);
            userProfileRepository.save(userProfile);
        }
    }

    // 프로필 사진 변경 로직
    public void updateProfilePhoto(UserProfile userProfile, String photoUrl) {
        userProfile.setProfilePhotoUrl(photoUrl);
        userProfileRepository.save(userProfile);
    }
}