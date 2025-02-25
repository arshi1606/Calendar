export const handleEventDrop = async (
    eventDropInfo: any,
    updateEvent: any,
    refetch: any,
    socket: any 
  ) => {
    const { id } = eventDropInfo.event;
    const start = eventDropInfo.event.start?.toISOString();
    const end = eventDropInfo.event.end?.toISOString();
  
    if (!start || !end) {
        alert("Invalid date range for the event.");
        return;
    }
  
    try {
        const { data } = await updateEvent({
            variables: {
                id,
                title: eventDropInfo.event.title,
                description: eventDropInfo.event.extendedProps?.description || "", 
                start,
                end,
            },
        });
        if (socket) {
            socket.emit("updateEvent", data.updateEvent);
        }
  
        await refetch();
    } catch (err) {
        console.error("Error updating event on drop:", err);
        alert("Failed to update event.");
    }
  };
  