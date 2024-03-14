package backend.planawaypracticeV3.profile.Repository;


import backend.planawaypracticeV3.profile.Model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {
}
