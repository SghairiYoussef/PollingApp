package com.voting.votingapp.services;

import com.voting.votingapp.models.OptionVote;
import com.voting.votingapp.models.Poll;
import com.voting.votingapp.repositories.PollRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PollService {
    private final PollRepository pollRepository;

    public PollService(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }

    public Poll createPoll(Poll poll) {
        return pollRepository.save(poll);
    }

    public List<Poll> getAllPolls() {
        return pollRepository.findAll();
    }

    public Optional<Poll> getPollById(Long id) {
        return pollRepository.findById(id);
    }

    public void vote(Long pollId, int optionIndex) {
        Poll poll = pollRepository.findById(pollId)
                .orElseThrow(() -> new IllegalArgumentException("Poll not found"));
        List<OptionVote> options = poll.getOptions();
        if (optionIndex < 0 || optionIndex >= options.size()) {
            throw new IllegalArgumentException("Option index out of bounds");
        }
        OptionVote optionVote = options.get(optionIndex);
        optionVote.setVoteCount(optionVote.getVoteCount() + 1);
        pollRepository.save(poll);
    }
}
