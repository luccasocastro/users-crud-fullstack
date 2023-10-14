package com.luxkapotter.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.luxkapotter.backend.models.User;
import com.luxkapotter.backend.repositories.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user){
        return userRepository.save(user);
    }

    public User findById(Long id){
        return userRepository.findById(id).get();
    }

    public List<User> findAll(){
        return (List<User>) userRepository.findAll(); 
    }

    public void delete(Long id){
        userRepository.deleteById(id);
    }

    public User updateUser(User user, Long id){
        return userRepository.findById(id)
            .map(existingUser -> {
                existingUser.setName(user.getName());
                existingUser.setEmail(user.getEmail());
                existingUser.setpNo(user.getpNo());
                existingUser.setAddress(user.getAddress());

                return userRepository.save(existingUser);
            })
            .orElse(null);
    }
}
