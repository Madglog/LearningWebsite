import React, { useState, useEffect } from 'react';
import { Save, Edit3, Eye, Trash2 } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { Card, CardBody, CardHeader } from '../common/Card';
import { Button } from '../common/Button';
import ReactMarkdown from 'react-markdown';

export const NotesEditor = ({ moduleId, sectionId, title }) => {
  const { progress, saveNote } = useProgress();
  const noteKey = `${moduleId}-${sectionId}`;
  const [note, setNote] = useState(progress.notes[noteKey] || '');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaved, setIsSaved] = useState(true);

  useEffect(() => {
    setNote(progress.notes[noteKey] || '');
  }, [noteKey, progress.notes]);

  const handleSave = () => {
    saveNote(moduleId, sectionId, note);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear your notes?')) {
      setNote('');
      saveNote(moduleId, sectionId, '');
    }
  };

  const handleChange = (e) => {
    setNote(e.target.value);
    setIsSaved(false);
  };

  return (
    <Card className="my-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Edit3 size={18} />
            My Notes: {title}
          </h3>
          <div className="flex gap-2">
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant="outline"
              size="sm"
              icon={isEditing ? Eye : Edit3}
            >
              {isEditing ? 'Preview' : 'Edit'}
            </Button>
            {note && (
              <Button
                onClick={handleClear}
                variant="danger"
                size="sm"
                icon={Trash2}
              >
                Clear
              </Button>
            )}
            <Button
              onClick={handleSave}
              variant={isSaved ? 'success' : 'primary'}
              size="sm"
              icon={Save}
              disabled={isSaved}
            >
              {isSaved ? 'Saved' : 'Save'}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        {isEditing ? (
          <textarea
            value={note}
            onChange={handleChange}
            placeholder="Write your notes here... (Markdown supported)"
            className="
              w-full min-h-[300px] p-4
              bg-slate-50 dark:bg-slate-900
              border border-slate-200 dark:border-slate-700
              rounded-lg
              text-slate-900 dark:text-slate-100
              placeholder-slate-400
              focus:outline-none focus:ring-2 focus:ring-blue-500
              resize-y
              font-mono text-sm
            "
          />
        ) : (
          <div className="prose dark:prose-invert max-w-none min-h-[300px] p-4">
            {note ? (
              <ReactMarkdown>{note}</ReactMarkdown>
            ) : (
              <p className="text-slate-400 italic">
                No notes yet. Click "Edit" to start writing.
              </p>
            )}
          </div>
        )}

        {isEditing && (
          <p className="text-xs text-slate-500 mt-2">
            💡 Tip: You can use Markdown formatting (headings, lists, bold, italic, code, etc.)
          </p>
        )}
      </CardBody>
    </Card>
  );
};
