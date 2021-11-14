package com.collegegradingsystem.Implementations;

import com.collegegradingsystem.DAO.UsersRepository;
import com.collegegradingsystem.Entity.Users;
import com.collegegradingsystem.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserImpl {

    @Autowired
    private UsersRepository repo;

    // get all users (not working as expected)
//    @GetMapping("/users")
//    public List<Users> getAllUsers(){
//        return repo.findAll();
//    }

    // create new user
//    @PostMapping("/users")
//    public Users createNewUser(@RequestBody Users user){
//      return repo.save(user);
//    }

    // find user by ID
//    @GetMapping("/users/{userId}")
//    public ResponseEntity<Users> getTheUserById(@PathVariable Long userId){
//        Users theUser = repo.findById(userId)
//                            .orElseThrow(() ->
//                            new ResourceNotFoundException("User with ID: \" + userId + \" doesn't exist"));
//        return ResponseEntity.ok(theUser);
//    }

    // update existing user
    @PutMapping("/users/{userId}")
    public ResponseEntity<Users> updateUser(@PathVariable Long userId, @RequestBody Users existingUser){
        Users user = repo.findById(userId)
                .orElseThrow(() -> new  ResourceNotFoundException("User with ID: " + userId + " doesn't exist"));
        user.setFirstName(existingUser.getFirstName());
        user.setLastName(existingUser.getLastName());
        user.setRoleId(existingUser.getRoleId());
        user.setEmail(existingUser.getEmail());
        user.setBirthdate(existingUser.getBirthdate());
        user.setUpdatedBy(existingUser.getUpdatedBy());
        Users updatedUser = repo.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    // delete existing user
    @DeleteMapping("/users/{userId}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(Long userId){
        Users user = repo.findById(userId)
                .orElseThrow(() -> new  ResourceNotFoundException("User with ID: " + userId + " doesn't exist"));

        repo.delete(user);

        Map<String, Boolean> response= new HashMap<>();
        response.put("Deleted successfully", Boolean.TRUE);
        return  ResponseEntity.ok(response);
    }

}
