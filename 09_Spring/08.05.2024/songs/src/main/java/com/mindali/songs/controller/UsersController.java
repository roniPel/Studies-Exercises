package com.mindali.songs.controller;

import com.mindali.songs.beans.PlayList;
import com.mindali.songs.beans.UserDetails;
import com.mindali.songs.service.UsersService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping("Users/")
@RequiredArgsConstructor
public class UsersController {
    private final UsersService userService;

    @PostMapping("/addUser")
    @ResponseStatus(HttpStatus.CREATED)
    public void addUserDetails(@RequestBody UserDetails userDetails) throws Exception {
        userService.AddUserDetails(userDetails);
    }

    @GetMapping("/GetUserPlaylists/{userId}")
    @ResponseStatus(HttpStatus.OK)
    public List<PlayList> getUserPlaylists(@PathVariable int userId) throws Exception {
        return userService.GetUserPlaylists(userId);
    }
}