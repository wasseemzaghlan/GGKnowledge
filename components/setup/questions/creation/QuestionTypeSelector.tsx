"use client";

import { QuestionCategory, QuestionType } from "@/types/exam";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface QuestionTypeSelectorProps {
  category: QuestionCategory;
  type: QuestionType;
  onCategoryChange: (category: QuestionCategory) => void;
  onTypeChange: (type: QuestionType) => void;
}

const QUESTION_CATEGORIES = {
  'direct': 'Direct Question',
  'complex': 'Complex Question'
} as const;

const QUESTION_TYPES = {
  'multiple-choice': 'Multiple Choice',
  'true-false': 'True/False',
  'descriptive': 'Descriptive'
} as const;

export function QuestionTypeSelector({
  category,
  type,
  onCategoryChange,
  onTypeChange,
}: QuestionTypeSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label>Question Category</Label>
        <Select value={category} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(QUESTION_CATEGORIES).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {category === "direct" && (
        <div className="space-y-2">
          <Label>Question Type</Label>
          <Select value={type} onValueChange={onTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(QUESTION_TYPES).map(([value, label]) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}