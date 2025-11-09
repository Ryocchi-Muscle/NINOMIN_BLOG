"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface TagFilterProps {
  tags: string[];
  onTagSelect?: (tag: string | null) => void;
}

export default function TagFilter({ tags, onTagSelect }: TagFilterProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagClick = (tag: string) => {
    const newTag = selectedTag === tag ? null : tag;
    setSelectedTag(newTag);
    onTagSelect?.(newTag);
  };

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">
          Filter by Tags
        </h3>
        <div className="flex flex-wrap gap-3 justify-center">
          <Badge
            variant={selectedTag === null ? "default" : "outline"}
            className="cursor-pointer text-sm px-4 py-2 transition-all hover:scale-105"
            onClick={() => {
              setSelectedTag(null);
              onTagSelect?.(null);
            }}
          >
            All
          </Badge>
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className="cursor-pointer text-sm px-4 py-2 transition-all hover:scale-105"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
