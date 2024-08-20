from calendar_service import authenticate_google_calendar, create_event

def main():
    # Authenticate and get the Google Calendar service
    service = authenticate_google_calendar()

    # Example: Create an event
    summary = 'Meeting with Project Team'
    description = 'Discuss project milestones and deliverables'
    location = 'Google Meet'
    start_time = '2024-08-15T10:00:00Z'  # Use UTC time
    end_time = '2024-08-15T11:00:00Z'    # Use UTC time

    create_event(service, summary, start_time, end_time, description, location)

if __name__ == '__main__':
    main()
