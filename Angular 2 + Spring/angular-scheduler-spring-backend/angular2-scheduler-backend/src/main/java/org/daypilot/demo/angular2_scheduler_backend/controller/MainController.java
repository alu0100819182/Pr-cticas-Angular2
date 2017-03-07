package org.daypilot.demo.angular2_scheduler_backend.controller;


import org.daypilot.demo.angular2_scheduler_backend.domain.Event;
import org.daypilot.demo.angular2_scheduler_backend.domain.Resource;
import org.daypilot.demo.angular2_scheduler_backend.repository.EventRepository;
import org.daypilot.demo.angular2_scheduler_backend.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

@RestController
public class MainController {
	
    @Autowired
    EventRepository er;
	
    @Autowired
    ResourceRepository rr;
	
    @RequestMapping("/api")
    @ResponseBody
    String home() {
        return "Welcome!";
    }
    
}
