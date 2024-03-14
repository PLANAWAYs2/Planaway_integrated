package backend.planawaypracticeV3.profile.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class UserProfile {
    @Id
    private Long id;
    private String username;
    private String profilePhotoUrl;

    // 생성자, getter, setter 등
}
