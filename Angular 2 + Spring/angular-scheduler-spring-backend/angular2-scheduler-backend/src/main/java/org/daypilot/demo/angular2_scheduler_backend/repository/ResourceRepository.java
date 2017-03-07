package org.daypilot.demo.angular2_scheduler_backend.repository;

import org.daypilot.demo.angular2_scheduler_backend.domain.Resource;
import org.springframework.data.repository.CrudRepository;

public interface ResourceRepository extends CrudRepository<Resource, Long> {
}

