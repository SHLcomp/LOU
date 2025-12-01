/* Services.scss */

/* Base styles */
.services {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--text);
  margin-top: 6em;
  padding-block: 2em;
  gap: 3em;

  h1 {
    font-family: "exbed";
    transform: translateY(40px);
    opacity: 0.01;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;

    &.pop {
      animation: header 2s forwards;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    padding-inline: 2em;
    gap: 2em;

    .img {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        border-radius: 20px;
        transform: scale(0.3);
        opacity: 0.3;

        &.pop {
          animation: zoomImage 1s forwards;
        }
      }
    }

    .cards {
      display: grid;
      width: 55%;
      grid-template-columns: repeat(3, 1fr);
      gap: 1em;

      .card {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: clamp(250px, 30vh, 350px); /* fixed height for all cards */
        box-shadow: 3px 4px 6px 3px var(--silver-glow);
        transition: 0.5s ease;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
        background: white;
        opacity: 0;
        transform: translateY(60px);

        &.pop {
          animation: cards 1s forwards;
        }

        &:hover {
          box-shadow: 3px 4px 12px 3px var(--golden-glow);
        }

        &:hover img {
          transform: scale(1.1);
        }

        &:hover .card-text h5,
        &:hover .card-text p {
          display: block !important;
        }

        &:hover .card-img::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--image-highlight);
          pointer-events: none;
          opacity: 0.05;
        }

        .card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 13/10;
          overflow: hidden;
          transition: 1s ease;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.5s ease;
          }
        }

        .card-text {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          gap: 5px;
        //   overflow: auto; /* allows scroll if text is too long */
          height: calc(100% - (13/10 * 100%)); /* keep text area inside fixed card height */

          h3 {
            padding-top: 0.5em;
            font-family: 'exbed';
            text-align: center;
            font-size: 15px;
          }

          p {
            font-size: 15px;
            padding: 0 20px 20px 20px;
            display: none;
            transition: 0.3s ease;
          }

          h5 {
            margin-bottom: 2em;
            display: none;
            transition: 0.3s ease;
          }
        }
      }
    }
  }
}

/* Animations */
@keyframes header {
  from {
    transform: translateY(40px);
    opacity: 0.01;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes cards {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoomImage {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Tablet styles */
@media (max-width: 1024px) {
  .services .container {
    flex-direction: column;
    align-items: center;
    gap: 2em;
    padding-inline: 1.5em;

    .img {
      width: 80%;

      img {
        width: 100%;
        transform: scale(0.4);
      }
    }

    .cards {
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      gap: 1em;

      .card {
        height: clamp(250px, 28vh, 350px); /* fixed height */
      }
    }
  }
}

/* Mobile styles */
@media (max-width: 600px) {
  .services .container {
    flex-direction: column;
    align-items: center;
    gap: 2em;
    padding-inline: 1em;

    .img {
      width: 100%;

      img {
        width: 90%;
      }
    }

    .cards {
      width: 100%;
      grid-template-columns: 1fr;
      gap: 1em;

      .card {
        width: 100%;
        height: clamp(250px, 35vh, 350px); /* fixed height */

        .card-text {
          justify-content: center;
          align-items: center;
          padding: 0;
          margin-bottom: 20px;
        }
      }
    }
  }
}
