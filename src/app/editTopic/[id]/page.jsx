import EditTopicForm from "@/components/editTopicForm";;

const getTopicById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
  
      const topicData = await res.json();
  
      // Check if the expected structure is present in the response
      if (topicData && topicData.topic) {
        return topicData;
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.log(error);
      // Handle the error or return a default value as needed
      return { topic: {} }; // Return an empty topic object or handle it based on your requirements
    }
  };
  

export default async function EditTopic({ params }) {

    try{
        const { id } = params;
        const { topic } = await getTopicById(id);
        const { title, description } = topic;
      
        return <EditTopicForm id={id} title={title} description={description} />;
    }
    catch (error) {
        console.log(error);
        // Handle the error gracefully, for example by redirecting or displaying an error page.
      }

}