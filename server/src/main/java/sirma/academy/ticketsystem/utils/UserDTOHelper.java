package sirma.academy.ticketsystem.utils;

import sirma.academy.ticketsystem.dto.UserDto;
import sirma.academy.ticketsystem.dto.UserRegisterDto;
import sirma.academy.ticketsystem.model.User;

public class UserDTOHelper {
    public static UserDto userToUserDTO (User user){
        UserDto dto = new UserDto();
        dto.setEmail(user.getEmail());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setTelephone(user.getTelephone());
        return dto;
    }

    public static User registerDTOToUser(UserRegisterDto dto){
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setTelephone(dto.getTelephone());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setPassword(dto.getPassword());
        return user;
    }
}
