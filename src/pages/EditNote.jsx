import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EditNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Fetch note details based on id
    // For now, we'll use mock data
    setTitle(`Note ${id}`);
    setContent(`This is the content of note ${id}.`);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement note update logic
    console.log('Update note:', { id, title, content });
    navigate(`/note/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit Note</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={10}
        />
        <div className="space-x-2">
          <Button type="submit">Save</Button>
          <Button type="button" variant="outline" onClick={() => navigate(`/note/${id}`)}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default EditNote;