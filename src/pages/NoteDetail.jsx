import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const NoteDetail = () => {
  const [note, setNote] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Fetch note details based on id
    // For now, we'll use mock data
    setNote({
      id: parseInt(id),
      title: `Note ${id}`,
      content: `This is the content of note ${id}.`
    });
  }, [id]);

  const handleDelete = () => {
    // TODO: Implement delete logic
    console.log('Delete note:', id);
    navigate('/');
  };

  if (!note) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{note.title}</h1>
      <p className="mb-6">{note.content}</p>
      <div className="space-x-2">
        <Link to={`/edit/${note.id}`}>
          <Button>Edit</Button>
        </Link>
        <Button variant="destructive" onClick={handleDelete}>Delete</Button>
        <Link to="/">
          <Button variant="outline">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default NoteDetail;