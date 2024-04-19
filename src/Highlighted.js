import { Box, Text, Tooltip } from '@chakra-ui/react';

const sentimentColor = {
    POSITIVE: 'lightgreen',
    NEGATIVE: 'pink',
    NEUTRAL: 'lightgray',
};

export default function Highlighted({ text, sentiment, entities }) {

  const entityText = entities.map((e) => e.text);
  const parts = text.split(new RegExp(`(${entityText.join('|')})`, 'g'));
  return (
    <Box as='mark' bg={sentimentColor[sentiment]} m="1">
        {parts.map(part => {
          const matchiingEntity = entities.find((e) => e.text === part);
          if(matchiingEntity){
            return (
              <Tooltip label={matchiingEntity.entity_type} key={part}>
                <Text display="inline" fontSize="xl" fontWeight="bold">
                  {part}
                </Text>
              </Tooltip>
            );
          }
          return part;
        })}
    </Box>
  )
}
