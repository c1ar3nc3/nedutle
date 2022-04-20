import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="H"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="D" />
        <Cell value="E" />
        <Cell value="Z" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter H is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="J" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Y"
          status="present"
        />
        <Cell value="O" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter Y is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" />
        <Cell value="S" />
        <Cell value="'" />
        <Cell isRevealing={true} isCompleted={true} value="I" status="absent" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter I is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
