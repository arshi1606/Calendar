export const handleSubmit = async (
    e: React.FormEvent,
    validateEventTimes: any,
    formData: any,
    createEvent: any,
    data: any,
    setFormData: any,
    refetch: any,
    socket: any 
  ) => {
    e.preventDefault();
    
    if (!validateEventTimes()) {
        alert("Start time must be earlier than end time.");
        return;
    }
  
    const { title, description, start, end } = formData;
    if (!title || !description || !start || !end) {
        alert("Please fill in all fields");
        return;
    }
  
    try {
        console.log("Creating event with start:", start);
        
        const { data: eventData } = await createEvent({
            variables: {
                userId: data?.user?.id,
                start: new Date(start + "Z").toISOString(), 
                end: new Date(end + "Z").toISOString(), 
                description,
                title,
            },
        });
  
        console.log("Event created:", eventData.createEvent);
        if (socket) {
            socket.emit("newEvent", eventData.createEvent);
        }
  
        await refetch();
        setFormData({ title: "", description: "", start: "", end: "" });
  
    } catch (err) {
        console.error("Error creating event:", err);
        alert("Failed to create event");
    }
  };
  