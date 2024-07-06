package org.zerock.mallapi;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class Hello {
    @GetMapping("/welcome")
    public String getMethodName() {
        return "welcome";
    }
    
}
