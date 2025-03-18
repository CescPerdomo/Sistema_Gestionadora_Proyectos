"use client";

export default function Card({ title, description, image, footer }) {
  return (
    <div className="card mb-3 shadow-sm">
      {image && (
        <img src={image} className="card-img-top" alt={title} />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {description && (
          <p className="card-text">{description}</p>
        )}
      </div>
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
}
