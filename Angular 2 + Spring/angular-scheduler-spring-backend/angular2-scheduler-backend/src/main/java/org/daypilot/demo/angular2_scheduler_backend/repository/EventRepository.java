package org.daypilot.demo.angular2_scheduler_backend.repository;

import org.daypilot.demo.angular2_scheduler_backend.domain.Event;
import org.springframework.data.repository.CrudRepository;

public interface EventRepository extends CrudRepository<Event, Long> {
}