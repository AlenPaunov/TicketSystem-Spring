package sirma.academy.ticketsystem.api.repository;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import sirma.academy.ticketsystem.model.User;
import sirma.academy.ticketsystem.repository.UserRepository;

import java.util.Optional;

import static org.junit.Assert.assertThrows;

@DataJpaTest
@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)
public class UserRepositoryTests {
    @Autowired
    private UserRepository userRepository;

    @Test
    public void UserRepository_Save_ReturnsSavedUser() {
        // Arrange
        User user = User.builder()
                .firstName("TestFirstName")
                .lastName("LastName")
                .password("password")
                .email("test@email.com")
                .telephone("123123")
                .build();

        // Act
        User savedUser = userRepository.save(user);

        // Assert
        Assertions.assertThat(savedUser).isNotNull();
        Assertions.assertThat(savedUser.getId()).isGreaterThan(0);

    }

    @Test
    public void UserRepository_FindById_ReturnUser() {
        // Arrange
        User user = User.builder()
                .firstName("TestFirstName")
                .lastName("LastName")
                .password("password")
                .email("test@email.com")
                .telephone("123123")
                .build();
        User savedUser = userRepository.save(user);

        // Act
        Optional<User> found = userRepository.findById(savedUser.getId());

        // Assert
        Assertions.assertThat(found.isPresent()).isTrue();
        Assertions.assertThat(found.get().getEmail().equals(user.getEmail())).isTrue();

    }

    @Test
    public void UserRepository_SaveWithoutEmail_ThrowsError() {
        // Arrange
        User user = User.builder()
                .firstName("TestFirstName")
                .lastName("LastName")
                .password("password")
                .telephone("123123")
                .build();

        // Act

        // Assert
        assertThrows(Exception.class, ()-> userRepository.save(user) );

    }
}
