export const handleUpdate = async (
    validateEventTimes: any,
    formData: any,
    updateEvent: any,
    selectedEvent: any,
    setSelectedEvent: any,
    setFormData: any,
    refetch: any,
    socket: any 
) => {
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
        const { data } = await updateEvent({
            variables: {
                id: selectedEvent.id,
                title,
                description,
                start: new Date(start + "Z").toISOString(),
                end: new Date(end + "Z").toISOString(),
            },
        });

        if (socket) {
            socket.emit("updateEvent", data.updateEvent);
        }

        setSelectedEvent(null);
        setFormData({ title: "", description: "", start: "", end: "" });
      await refetch();
    } catch (err) {
        console.error("Error updating event:", err);
        alert("Failed to update event");
    }
};
