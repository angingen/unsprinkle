import React from "react";
import styled from "styled-components/macro";

const getResponsiveImgSrcSet = (src, imgType) => {
  const [imgPathWithoutTypeAfterFix] = src.match(/(.*)(?=.jpg)/);

  return [`@3x.${imgType}`, `@3x.${imgType}`, `.${imgType}`]
    .map((afterFix) => `${imgPathWithoutTypeAfterFix}${afterFix}`)
    .join(", ");
};

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={getResponsiveImgSrcSet(src, "avif")}
          />
          <source
            type="image/jpg"
            srcSet={getResponsiveImgSrcSet(src, "jpg")}
          />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  line-height: calc(0.875rem + 16px);
  font-weight: 475;
  color: var(--color-gray-800);

  & + & {
    margin-left: 8px;
  }
`;

export default PhotoGridItem;
