import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Welcome Note', content: 'Welcome to your new Notes App!' },
    { id: 2, title: 'How to use', content: 'Click on a note to view or edit it. Use the "New Note" button to create a new note.' },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Notes App</h1>
      <Link to="/create">
        <Button className="mb-4">New Note</Button>
      </Link>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <Link key={note.id} to={`/note/${note.id}`}>
            <Card>
              <CardHeader>
                <CardTitle>{note.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="truncate">{note.content}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;