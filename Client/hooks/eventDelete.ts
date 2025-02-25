export const handleEventDelete = async (
    deleteEvent: any,
    selectedEvent: any,
    setSelectedEvent: any,
    setFormData: any,
    refetch: any,
    socket: any 
) => {
    try {
        await deleteEvent({ variables: { id: selectedEvent.id } });
        if (socket) {
            socket.emit("deleteEvent", { id: selectedEvent.id });
        }

        setSelectedEvent(null);
        setFormData({ title: "", description: "", start: "", end: "" });
       await refetch();
    } catch (err) {
        console.error("Error deleting event:", err);
        alert("Failed to delete event");
    }
};
